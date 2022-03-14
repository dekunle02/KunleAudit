from django.test import TestCase

from .models import Painting
from djmoney.money import Money
from djmoney.contrib.exchange.backends import FixerBackend
from djmoney.contrib.exchange.models import convert_money
# Create your tests here.


class PaintingTestCase(TestCase):
    def test_view_money(self):
        painting = Painting.objects.create(
            name="One Tree Hill",
            price=Money(50, 'USD')
        )

    def test_exchange_currency(self):
        FixerBackend().update_rates()
        money_in_dollars = Money(50, 'USD')
        money_in_pounds = convert_money(money_in_dollars, "GBP")
        print("money=> ", money_in_pounds)
