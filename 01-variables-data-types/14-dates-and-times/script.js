let z;

z = new Date();

// z = z.toString();

z = new Date(1993, 0, 29, 22, 44, 22);

z = new Date('2025-12-10T12:22:13');
z = new Date('10/15/2025 12:22:13');
z = new Date('2020-10-10');


z = Date.now();
z = new Date('10/10/2025 12:12:12');
z = z.getTime();

z = new Date(1760087532000);

z = Math.floor(Date.now() / 1000);

console.log(z)