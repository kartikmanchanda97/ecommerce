from django.urls import path, include
from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('category', views.CategoryView, basename="category")
router.register('product', views.ProductView, basename="product")

urlpatterns = [
  path('', include(router.urls))
]