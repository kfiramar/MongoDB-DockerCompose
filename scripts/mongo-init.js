db.createUser(
    {
        user: "dmarket",
        pwd: "Xhdhy",
        roles: [
            {
                role: "readWrite",
                db: "admin"
            }
        ]
    }
);
