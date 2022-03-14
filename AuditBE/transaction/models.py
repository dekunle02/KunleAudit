from datetime import date
from django.db import models
from djmoney.models.fields import MoneyField

from project.models import Project


class Transaction(models.Model):
    class Kind(models.TextChoices):
        """Established the 2 fundamental types of Transactions"""
        INCOME = "income"
        EXPENSE = "expense"

    project = models.ForeignKey(Project, on_delete=models.PROTECT)
    description = models.CharField(max_length=50, default="")
    date = models.DateField(default=date.today)
    number = models.CharField(max_length=20, null=True, blank=True)
    amount = MoneyField(max_digits=14, decimal_places=2,
                        default_currency='USD', null=True)

    def __str__(self) -> str:
        return f"Transaction:{self.uuid} Date:{self.date}"
