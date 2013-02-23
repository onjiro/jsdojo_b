describe("Pomodoro", function() {
    it("new できること", function() {
        expect(new Pomodoro({remainSeconds: 25 * 60 * 1000})).to.be.a(Pomodoro);
    });
});
