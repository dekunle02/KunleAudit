from django.db import models
from djmoney.models.fields import MoneyField
# Create your models here.


class Client(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    representative = models.CharField(max_length=100, null=True, blank=True)
    is_company = models.BooleanField(default=False)
    address_line_1 = models.TextField(max_length=200, null=False)
    address_line_2 = models.TextField(max_length=200, null=True, blank=True)
    address_line_3 = models.TextField(max_length=200, null=True, blank=True)
    vendor_number = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self) -> str:
        return f"Client:{self.name} is_company:{self.is_company}"


class Painting(models.Model):
    name = models.CharField(max_length=300, null=False, blank=False)
    price = MoneyField(max_digits=14, decimal_places=2, default_currency='USD')

    def __str__(self) -> str:
        return f"Painting:{self.name} Price:{self.price}"


class Project(models.Model):
    title = models.CharField(max_length=300, null=False, blank=False)
    client = models.ForeignKey(
        Client, on_delete=models.PROTECT, null=True, blank=True)
    fee = MoneyField(max_digits=14, decimal_places=2,
                     default_currency='USD', null=True)
    paintings = models.ManyToManyField(Painting, blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    type = models.CharField(max_length=20, null=False, default="Others")
    in_progress = models.BooleanField(default=True)

    def __str__(self) -> str:
        return f"Project:{self.title}"
