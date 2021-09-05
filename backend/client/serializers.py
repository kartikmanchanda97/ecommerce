from rest_framework.serializers import ModelSerializer, ValidationError
from .models import User

def validate(value):
	if (len(value['name']) < 2):
		raise ValidationError({'error':'Name Must Contain Atleast 2 Characters'})
	if (len(value['password']) < 6):
		raise ValidationError({'error':'Passowrd Must Contain Atleast 6 Characters'})


class UserSerializer(ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'
		validators = [validate]