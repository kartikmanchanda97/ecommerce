from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Category, Product
from .serializers import CategorySerializer
from .serializers import ProductSerializer


class CategoryView(ReadOnlyModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer

class ProductView(ReadOnlyModelViewSet):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer