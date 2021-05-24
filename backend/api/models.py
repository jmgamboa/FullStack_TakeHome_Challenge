from django.db import models
from django.db.models.aggregates import Count
from random import randint

class CustomerManager(models.Manager):

    def random(self):
        count = self.aggregate(count=Count('id'))['count']
        random_index = randint(0, count - 1)
        return self.all()[random_index]

class Customer(models.Model):
    HIGHEST = 1
    HIGH = 2
    LOW = 3
    LOWEST = 4
    PRIORITY_CHOICES = [
        (HIGHEST, 'Highest'),
        (HIGH, 'High'),
        (LOW, 'Low'),
        (LOWEST, 'Lowest'),
    ]

    name = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    priority = models.IntegerField(
        db_index=True,
        choices=PRIORITY_CHOICES,
        default=LOWEST,
    )

    objects = CustomerManager()


"""I definitely would have prefered to go with a more flexible and scalable model approach. For the sake of conserving time safely, I've gone with a more primitive approach that satisfies the requirement.

Alternative approch
A priority model with values representing the heirachy

class Priority
    name = charField
    heirarchy = IntegerField

class Customer
    priority = ForeignKey

This would allow end user to not only assign priorities but create their own priorit system with their specified value heirarchy
"""