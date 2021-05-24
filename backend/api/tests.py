from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.test import APIClient
from api.models import Customer


class TestCustomers(TestCase):

    def setUp(self):
        # user
        user = User.objects.create(username='me')
        self.client = APIClient()
        self.client.force_authenticate(user=user)

        self.customer = Customer.objects.create(
            name='Alice',
            company='Light Year',
            priority=Customer.HIGHEST

        )

    def test_get_api(self):
        # list
        response = self.client.get('/customers/')
        self.assertEqual(response.status_code, 200)

        # retrieve
        cid = self.customer.id
        response = self.client.get(f'/customers/{cid}/')
        self.assertEqual(response.status_code, 200)

    def test_post(self):
        # post
        new_customer = {
            "name": "Bob",
            "company": "Light Year",
            "priority": Customer.LOWEST
        }
        response = self.client.post('/customers/', new_customer)
        self.assertEqual(response.status_code, 201)

    def test_delete(self):
        cid = self.customer.id
        response = self.client.delete(f'/customers/{cid}/')
        self.assertEqual(response.status_code, 204)

    def test_randomize(self)
        response = self.client.post('/randomize-customer/')
        self.assertEqual(response.status_code, 200)
