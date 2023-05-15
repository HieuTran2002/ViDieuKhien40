using Microsoft.AspNetCore.Mvc;

namespace vdk240.Controllers
{
	public class ConfigController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
