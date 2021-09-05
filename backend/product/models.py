from django.db import models

class Category(models.Model):
	category = models.CharField(max_length=300)
	desc = models.TextField()
	picture = models.ImageField(upload_to='category/', blank=False)

	def __str__(self):
		return self.category


class Product(models.Model):
	name = models.CharField(max_length=300)
	price = models.IntegerField()
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	desc = models.TextField()
	picture = models.ImageField(upload_to='product/', blank=False)