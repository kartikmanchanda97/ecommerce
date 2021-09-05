from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserSerializer
from .models import User
from django.contrib.auth.hashers import make_password, check_password
import jwt
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['POST'])
def SignUpClient(req):
	serialize = UserSerializer(data=req.data)
	email = req.data['email']

	try:
		user = User.objects.get(email=email)
		return Response({'error':'User Already Exist'})
	except User.DoesNotExist:
		if serialize.is_valid():
			serialize.save(password=make_password(serialize.initial_data['password']))
			return Response('User Created', status=status.HTTP_201_CREATED)
		else:
			return Response(serialize.errors, status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)


@csrf_exempt
@api_view(['POST'])
def LoginClient(req):
	email = req.data['email']
	password = req.data['password']

	try:
		user = User.objects.get(email=email)
		if check_password(password, user.password):
			token = jwt.encode({'id':user.id, 'name':user.name, 'email':user.email}, "Secret", algorithm="HS256")
			return Response(token, status=status.HTTP_200_OK)
		else:
			return Response('Incorrect Password', status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
	except User.DoesNotExist:
		return Response('User Does Not Exist', status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
