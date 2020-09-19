class RoutingTest < Minitest::Test
  include ::RouteMechanic::Testing::Methods

  def test_that_application_has_correct_routes
    assert_all_routes
  end
end
