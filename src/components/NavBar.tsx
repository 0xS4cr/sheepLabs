import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../sass/navbar.scss";

interface NavBarProps {
	onLanguageChange: (language: string) => void;
	toggleTheme: () => void;
	currentTheme: string;
	currentLanguage: string;
}

const NavBar: React.FC<NavBarProps> = ({
	onLanguageChange,
	toggleTheme,
	currentTheme,
	currentLanguage,
}) => {
	const [showModal, setShowModal] = useState(false);

	const handleModalClick = (e: any) => {
		e.stopPropagation();
		setShowModal(!showModal);
	};

	const handleOutsideClick = () => {
		if (showModal) {
			setShowModal(false);
		}
	};

	return (
		<nav onClick={handleOutsideClick}>
			<div className="navbar-logo">
				<a href="/">
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="100%"
						viewBox="0 0 600 200"
						enableBackground="new 0 0 600 200"
					>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M68.000298,63.855015 
	C68.209930,67.314163 66.404106,68.691109 63.223354,69.952362 
	C49.452183,75.413048 39.680820,84.633591 36.756725,99.858231 
	C35.898758,104.325325 37.155884,106.224113 42.026840,106.241035 
	C56.543152,106.291443 67.113274,99.828896 74.582413,87.659645 
	C75.447708,86.249825 77.259697,83.966515 77.969093,84.190468 
	C80.030693,84.841293 82.138222,86.257835 83.485153,87.961205 
	C84.488762,89.230377 84.611343,91.406677 84.652817,93.189995 
	C84.838028,101.153557 84.695015,109.126396 84.962975,117.086044 
	C85.511803,133.388626 96.632355,146.794037 112.645714,150.737823 
	C128.377289,154.612213 145.203796,147.783966 152.438293,133.256607 
	C155.587692,126.932411 156.695831,119.411690 157.764877,112.289375 
	C158.595383,106.756378 158.230408,100.977425 157.838974,95.346573 
	C157.462021,89.924164 158.682098,85.847168 164.899872,84.043518 
	C165.671173,85.160789 166.660629,86.597801 167.653870,88.032196 
	C175.740936,99.711273 186.163757,106.960159 201.092453,106.041573 
	C204.409882,105.837440 205.868500,105.036018 205.348129,101.292946 
	C203.277939,86.402069 193.899841,77.463989 181.295990,71.031097 
	C180.413101,70.580475 179.377960,70.414078 178.523849,69.923553 
	C174.015121,67.334106 170.843140,67.822609 167.246323,72.323845 
	C161.673386,79.298096 153.575256,80.539330 143.031799,77.608749 
	C143.368164,71.502747 144.988480,69.853355 150.552902,69.952629 
	C161.626068,70.150177 169.663895,57.431850 164.655228,47.571865 
	C164.232468,46.739624 163.199646,45.420204 162.733337,45.529957 
	C157.852127,46.678772 158.247787,43.303711 157.531784,40.221172 
	C155.561630,31.739216 143.922592,28.850607 137.393982,35.114883 
	C134.766098,37.636372 132.048248,41.654541 128.501877,37.405605 
	C125.465874,33.768135 128.007660,30.274298 131.336227,27.682945 
	C132.240753,26.978750 133.050034,26.152205 133.888260,25.395153 
	C129.752274,19.257895 123.820694,16.922279 116.605568,18.505499 
	C109.164841,20.138220 103.000160,25.677532 102.611748,32.227066 
	C102.445679,35.027397 103.798393,38.382004 105.513809,40.708435 
	C107.513496,43.420376 108.383682,45.713818 105.969940,48.116394 
	C103.523689,50.551319 100.830147,49.866272 98.507698,47.545479 
	C91.893562,40.936012 92.672882,33.202366 95.178238,24.842518 
	C103.543198,11.376158 114.239471,6.186517 127.499672,10.176916 
	C132.443756,11.664744 136.577515,15.812503 141.117874,18.688826 
	C143.338913,20.095863 145.507431,22.119741 147.937683,22.564617 
	C155.899475,24.022095 162.487732,27.090948 166.073090,34.842255 
	C166.344391,35.428802 166.710083,36.079369 167.217987,36.432549 
	C174.082474,41.205769 175.305344,48.215286 175.013809,55.847500 
	C174.982498,56.667561 175.009598,57.489849 175.009598,58.572578 
	C185.166504,61.916138 194.438644,66.509720 201.783951,74.388039 
	C208.669357,81.773132 213.325241,90.190544 214.542267,100.322594 
	C215.427597,107.693390 213.005112,111.830894 205.954361,114.012749 
	C192.954819,118.035446 181.809219,113.572426 171.492508,105.917686 
	C170.088043,104.875595 168.823547,103.644852 166.515656,101.659737 
	C166.515656,107.222130 166.595200,111.621338 166.503021,116.016937 
	C165.784958,150.263000 130.103348,171.981827 100.184868,155.932693 
	C83.778168,147.131683 75.532822,132.706116 75.485771,113.880325 
	C75.477524,110.583397 75.484604,107.286438 75.484604,103.036797 
	C71.612930,105.483292 68.465385,107.496162 65.294319,109.471275 
	C57.408901,114.382782 49.002182,116.776657 39.623615,115.149551 
	C30.282686,113.528969 25.934946,107.851479 27.741541,98.607231 
	C31.584213,78.944458 43.831123,66.741570 62.438324,60.487934 
	C63.479599,60.137974 64.954994,61.079697 66.772858,61.825645 
	C67.545013,62.772385 67.772659,63.313702 68.000298,63.855015 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M361.692566,92.999329 
	C361.692535,99.469620 361.692535,105.440102 361.692535,111.704834 
	C356.774200,111.704834 352.190247,111.704834 347.098511,111.704834 
	C347.098511,101.956100 347.098511,92.059456 347.098511,81.886978 
	C337.374268,81.886978 328.152039,81.886978 318.395599,81.886978 
	C318.395599,91.964355 318.395599,101.864166 318.395599,111.879608 
	C313.392639,111.879608 308.922089,111.879608 304.114471,111.879608 
	C304.114471,88.398865 304.114471,65.000259 304.114471,41.262177 
	C308.481812,41.262177 313.066254,41.262177 318.254028,41.262177 
	C318.254028,50.506454 318.254028,59.892086 318.254028,69.509247 
	C327.960785,69.509247 337.073944,69.509247 346.738800,69.509247 
	C346.738800,60.170151 346.738800,50.787762 346.738800,41.170540 
	C351.877625,41.170540 356.474152,41.170540 361.692566,41.170540 
	C361.692566,58.285877 361.692566,75.392693 361.692566,92.999329 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M65.386444,123.609886 
	C68.133591,127.062576 68.895615,129.602951 65.487053,133.257858 
	C60.651871,138.442474 60.883728,146.649689 64.871254,151.722214 
	C69.456528,157.555115 75.860023,158.828690 83.499191,155.051941 
	C86.760986,153.439346 87.563652,155.776077 88.883041,157.616058 
	C90.291588,159.580338 91.019363,161.507858 88.413078,163.086746 
	C86.586220,164.193451 84.696335,165.196106 82.893822,166.211853 
	C84.810089,176.397507 91.890839,178.279877 106.314911,172.629089 
	C116.089638,184.559433 122.480484,186.269669 130.942398,179.042725 
	C129.987671,177.572662 129.032684,176.065506 128.040848,174.583008 
	C126.221771,171.864029 126.756081,169.387939 129.241821,167.598480 
	C131.922882,165.668411 134.203964,166.591827 135.930573,169.305923 
	C138.447647,173.262604 141.652084,176.242096 146.689011,176.415436 
	C153.174789,176.638611 157.321426,173.409760 160.060410,166.930511 
	C157.828751,164.923737 154.859573,163.096298 153.337418,160.439743 
	C152.785522,159.476532 155.692871,156.531235 157.077255,154.405197 
	C159.634155,155.413055 161.680267,156.563126 163.870605,157.016342 
	C169.668472,158.215988 174.363235,156.095703 177.816757,151.404083 
	C181.267059,146.716843 181.865738,138.499420 177.871140,134.079666 
	C173.597382,129.351089 175.342300,125.898338 178.450195,121.644684 
	C186.569641,126.338997 190.212936,133.525146 189.870087,142.625748 
	C189.488129,152.764359 184.882095,160.684433 175.274948,164.524078 
	C171.021729,166.223938 168.764496,168.384247 167.233673,172.725342 
	C164.225311,181.256424 155.685760,186.213287 146.682648,185.145432 
	C141.715851,184.556305 137.742477,185.023529 133.466461,188.478943 
	C125.953049,194.550415 114.904320,193.356857 106.554047,187.261368 
	C104.700417,185.908279 101.698410,185.098343 99.464233,185.471085 
	C88.535767,187.294449 78.122864,181.307816 74.024284,170.770081 
	C73.277184,168.849213 71.224304,166.790100 69.300858,166.083740 
	C60.561218,162.874252 54.956432,156.938934 53.308289,147.888596 
	C51.592678,138.467773 54.006855,130.009537 61.418480,123.505585 
	C62.159439,122.855362 63.896358,123.340096 65.386444,123.609886 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M256.713074,41.475319 
	C264.671722,39.386627 272.241394,39.145908 279.643372,42.033188 
	C288.367950,45.436371 293.192505,51.810719 293.896545,61.613510 
	C289.014038,61.613510 284.291840,61.613510 279.539459,61.613510 
	C277.131165,52.686531 269.604462,48.829021 261.328613,52.889801 
	C259.131714,53.967770 256.678955,56.791744 256.471588,59.012741 
	C256.268372,61.188904 258.250092,64.354431 260.219147,65.762199 
	C263.102478,67.823639 266.872437,68.610054 270.186707,70.111633 
	C275.455048,72.498528 281.000763,74.501701 285.806274,77.625420 
	C292.178894,81.767815 294.618561,88.329865 293.664703,95.866272 
	C292.684814,103.608292 287.904388,108.496666 280.778625,110.919197 
	C270.752136,114.327904 260.788879,113.914597 251.245239,109.057243 
	C243.651871,105.192513 239.636627,98.924515 239.193100,90.015640 
	C243.926132,90.015640 248.525787,90.015640 253.215302,90.015640 
	C257.031769,99.826675 260.857117,102.271828 270.801361,101.112869 
	C274.736938,100.654190 278.009308,99.119064 278.863434,94.914963 
	C279.737274,90.613792 277.872040,87.344810 273.843964,85.669197 
	C268.026428,83.249222 262.014313,81.285034 256.251648,78.748306 
	C249.702377,75.865295 243.960556,71.859131 242.042603,64.386635 
	C239.413147,54.142052 244.704086,45.865059 256.713074,41.475319 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M389.382782,53.341476 
	C389.066986,58.856174 389.066986,64.002617 389.066986,69.569717 
	C398.337921,69.569717 407.418762,69.569717 416.796997,69.569717 
	C416.796997,73.544418 416.796997,77.100861 416.796997,81.092003 
	C407.669891,81.092003 398.597015,81.092003 389.270142,81.092003 
	C389.270142,87.577118 389.270142,93.638161 389.270142,99.976982 
	C400.009857,99.976982 410.612976,99.976982 421.611023,99.976982 
	C421.611023,103.954681 421.611023,107.671852 421.611023,111.701874 
	C406.114044,111.701874 390.408783,111.701874 374.464752,111.701874 
	C374.464752,88.177856 374.464752,64.789093 374.464752,41.161957 
	C390.267090,41.161957 405.845184,41.161957 421.693542,41.161957 
	C421.693542,44.952579 421.693542,48.676037 421.693542,52.973221 
	C410.918427,52.973221 400.308502,52.973221 389.382782,53.341476 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M527.483826,43.261948 
	C538.507141,48.969265 543.207092,58.530529 540.817810,69.825577 
	C538.754272,79.580559 529.984985,86.183495 517.759827,86.852974 
	C512.482544,87.141968 507.176208,86.901405 501.501434,86.901405 
	C501.501434,91.505859 501.501434,95.623344 501.501434,99.740837 
	C501.501434,103.702980 501.501434,107.665123 501.501434,111.800949 
	C496.469238,111.800949 491.890442,111.800949 487.099701,111.800949 
	C487.099701,88.224854 487.099701,64.848602 487.099701,40.790730 
	C500.499939,41.941895 513.966675,38.820889 527.483826,43.261948 
M504.777527,52.864845 
	C503.684845,53.483116 501.665375,54.069096 501.642517,54.724625 
	C501.408844,61.431477 501.499451,68.149628 501.499451,75.048500 
	C505.700562,75.048500 509.176758,75.051224 512.652954,75.046982 
	C513.814209,75.045563 514.979065,75.081940 516.136047,75.006073 
	C522.713013,74.574730 526.390259,70.873558 526.461609,64.652573 
	C526.537964,57.991791 522.560181,53.363583 516.168152,52.960289 
	C512.696960,52.741276 509.202911,52.884678 504.777527,52.864845 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M430.647125,68.999817 
	C430.647125,59.512283 430.647125,50.524754 430.647125,41.233807 
	C446.394043,41.233807 461.968750,41.233807 477.829926,41.233807 
	C477.829926,44.926556 477.829926,48.649727 477.829926,52.737167 
	C467.116119,52.737167 456.507660,52.737167 445.548767,52.737167 
	C445.548767,58.459072 445.548767,63.831757 445.548767,69.708183 
	C454.720947,69.708183 463.793365,69.708183 473.088562,69.708183 
	C473.088562,73.629021 473.088562,77.063240 473.088562,80.962265 
	C464.064972,80.962265 454.979645,80.962265 445.547180,80.962265 
	C445.547180,87.464157 445.547180,93.515266 445.547180,100.091690 
	C456.310364,100.091690 467.041504,100.091690 477.980621,100.091690 
	C477.980621,104.213509 477.980621,107.821167 477.980621,111.716080 
	C462.422058,111.716080 446.841919,111.716080 430.647125,111.716080 
	C430.647125,97.653496 430.647125,83.576660 430.647125,68.999817 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M68.316772,63.996704 
	C67.772659,63.313702 67.545013,62.772385 67.061417,62.071480 
	C66.962029,59.707489 67.099442,57.501511 67.280281,55.299107 
	C67.482643,52.834648 67.435837,50.305397 67.997696,47.922283 
	C70.784218,36.103348 81.989517,25.126461 92.625961,23.927334 
	C92.762299,27.952530 91.833961,31.297369 88.200294,34.262936 
	C85.492378,36.472965 84.475479,40.754955 82.249603,44.979412 
	C76.546219,46.532681 74.255020,52.497253 77.387001,60.778984 
	C80.325699,68.549622 88.202721,71.523293 96.126160,67.853683 
	C96.261665,67.573906 96.539619,67.268425 96.499474,67.012932 
	C96.008156,63.886433 94.866951,60.264233 99.221458,59.176582 
	C103.337639,58.148457 104.897621,61.029171 106.182114,64.546593 
	C108.688835,71.410965 115.809151,75.038269 123.628761,73.933022 
	C130.291443,72.991295 134.496582,68.498184 135.482376,61.171768 
	C135.953735,57.668465 136.706345,53.993073 141.246429,54.809132 
	C145.763443,55.621052 145.822723,59.357025 145.099655,63.097134 
	C141.549026,81.463104 120.546982,89.720123 105.575844,78.458710 
	C102.830322,76.393501 100.917061,76.110764 97.711441,77.615791 
	C90.117531,81.181107 80.449966,78.750015 74.495880,72.185646 
	C72.278969,69.741508 70.572487,66.834389 68.316772,63.996704 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M312.897583,128.597473 
	C315.519775,128.663422 317.687439,128.636276 319.838135,128.814423 
	C324.371429,129.189911 328.363129,130.583725 330.089874,135.332336 
	C331.765381,139.939972 330.454956,143.746994 326.200409,146.830429 
	C331.222076,149.906937 332.657501,154.205154 330.946442,159.354950 
	C329.139191,164.794357 324.525330,166.216461 319.461090,166.397675 
	C314.193604,166.586151 308.914124,166.439682 303.451721,166.439682 
	C303.451721,153.671524 303.451721,141.427994 303.451721,128.597382 
	C306.535583,128.597382 309.485474,128.597382 312.897583,128.597473 
M311.223663,150.853195 
	C311.223663,153.779984 311.223663,156.706772 311.223663,160.030014 
	C314.137665,160.030014 316.956940,160.669373 319.229553,159.829544 
	C321.077301,159.146729 323.445679,156.675308 323.424133,155.025223 
	C323.402344,153.353180 321.014313,150.968964 319.145416,150.259659 
	C317.002655,149.446457 314.290894,150.132416 311.223663,150.853195 
M312.690948,134.980042 
	C312.024719,137.958893 311.358459,140.937744 310.635803,144.168854 
	C314.174988,144.168854 316.695679,144.764954 318.678711,143.988312 
	C320.397552,143.315140 322.635986,141.039795 322.575348,139.557220 
	C322.511871,138.004807 320.200836,136.158310 318.456177,135.189499 
	C317.185516,134.483902 315.239349,134.994781 312.690948,134.980042 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M284.344391,128.633118 
	C285.194824,129.058472 285.807892,129.374268 286.084808,129.875702 
	C286.561066,130.738113 286.831879,131.714676 287.181793,132.646042 
	C291.312897,143.641678 295.442719,154.637833 299.581360,165.656509 
	C292.514374,167.590546 292.315186,167.382599 289.785095,161.650070 
	C289.233246,160.399750 287.432251,159.328979 285.998169,158.936142 
	C284.295929,158.469833 282.341156,159.027206 280.544250,158.783600 
	C276.699554,158.262421 274.468414,159.340912 273.581116,163.533768 
	C272.432373,168.961700 268.044159,165.625320 264.226807,166.690598 
	C269.105408,153.549194 273.695587,141.184708 278.364868,128.607101 
	C280.318207,128.607101 282.136993,128.607101 284.344391,128.633118 
M278.072113,150.073090 
	C279.824341,154.750671 283.430298,151.018646 286.747101,152.547409 
	C285.166260,147.736633 283.867493,143.784286 282.132172,138.503372 
	C280.569214,142.919205 279.449432,146.082870 278.072113,150.073090 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M361.732056,163.764557 
	C350.365448,170.652679 337.174438,166.132858 336.040802,154.952850 
	C338.430878,154.952850 340.808594,154.952850 343.432404,154.952850 
	C344.264343,159.749710 347.699799,161.407288 352.097748,160.660706 
	C353.854431,160.362518 356.348969,158.595276 356.636841,157.129364 
	C356.913483,155.720612 355.137970,153.250092 353.609039,152.295288 
	C351.127014,150.745346 348.063660,150.159317 345.328644,148.974808 
	C339.123810,146.287521 336.395111,142.383682 337.035553,137.376907 
	C337.661987,132.479401 342.143402,128.872086 348.545227,128.112244 
	C357.567932,127.041321 363.715698,131.313843 364.753326,139.626816 
	C362.462311,139.626816 360.198364,139.626816 357.501801,139.626816 
	C356.297516,135.568665 353.395325,133.262802 348.785065,134.700333 
	C347.311951,135.159653 345.407867,136.767685 345.214050,138.074524 
	C345.026703,139.337738 346.461456,141.502472 347.758209,142.194168 
	C350.951508,143.897507 354.591583,144.747223 357.841949,146.362854 
	C365.501221,150.169983 367.017487,156.752686 361.732056,163.764557 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M241.579697,166.531006 
	C240.309265,165.461395 238.784195,164.404144 238.767487,163.323593 
	C238.592712,152.013107 238.659607,140.698883 238.659607,128.991486 
	C241.183624,128.991486 243.550354,128.991486 246.271500,128.991486 
	C246.271500,139.111038 246.271500,149.215408 246.271500,159.933777 
	C251.952408,159.933777 257.317963,159.933777 262.852448,159.933777 
	C262.852448,162.329742 262.852448,164.111679 262.852448,166.532547 
	C255.880402,166.532547 248.952850,166.532547 241.579697,166.531006 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M134.692505,123.623032 
	C132.235260,126.350952 130.009979,128.803711 127.521072,131.547058 
	C129.845184,134.063431 132.054962,136.456024 134.133957,138.707001 
	C132.136169,140.846741 130.266785,142.848953 127.772758,145.520187 
	C125.936409,143.107590 124.031700,140.605194 121.813797,137.691315 
	C118.778206,140.556549 116.422668,142.779892 113.685448,145.363495 
	C111.949326,142.924652 110.345230,140.671295 108.504738,138.085831 
	C110.119461,136.625458 112.658287,134.329285 115.419647,131.831863 
	C113.816597,130.053268 112.434708,128.457382 110.986298,126.924324 
	C105.802086,121.437119 105.793564,121.445168 111.795197,116.155449 
	C114.653107,119.109795 117.518173,122.071541 120.831009,125.496162 
	C124.238571,121.844757 127.335724,118.525970 130.715118,114.904747 
	C131.850372,118.090576 137.525375,118.465553 134.692505,123.623032 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M93.227753,97.678917 
	C93.484695,94.758484 93.246582,91.715714 94.588531,89.753586 
	C95.449432,88.494820 99.163666,87.870193 100.653748,88.686508 
	C102.595169,89.750092 104.706551,92.529381 104.694603,94.558296 
	C104.682838,96.555145 102.422462,99.720848 100.576233,100.209175 
	C98.522118,100.752487 95.821457,98.851440 93.227753,97.678917 
z"
						/>
						<path
							fill="var(--text-color)"
							opacity="1.000000"
							stroke="none"
							d="
M138.265289,97.729424 
	C136.918243,93.843781 137.412643,90.512550 140.998871,88.983398 
	C142.767136,88.229431 145.619476,88.482033 147.323776,89.444016 
	C150.546387,91.263000 150.862762,95.707993 148.567337,98.577248 
	C145.887802,101.926643 142.340256,101.742767 138.265289,97.729424 
z"
						/>
					</svg>
				</a>
			</div>
			<div className="desktop-links ">
				<a href="#Services">
					<FormattedMessage id="navbar.service" defaultMessage="Services" />
				</a>
				<a href="#About">
					<FormattedMessage id="navbar.about" defaultMessage="About" />
				</a>
				<a href="#Contact">
					<FormattedMessage id="navbar.contact" defaultMessage="Contact" />
				</a>
			</div>
			<div className="desktop-settings">
				<div className="language-switch-desktop">
					<span
						className={currentLanguage === "fr" ? "active" : ""}
						onClick={() => onLanguageChange("fr")}
					>
						FR
					</span>{" "}
					/
					<span
						className={currentLanguage === "en" ? "active" : ""}
						onClick={() => onLanguageChange("en")}
					>
						EN
					</span>
				</div>
				<button className="theme" onClick={toggleTheme}>
					<FontAwesomeIcon icon={currentTheme === "dark" ? faSun : faMoon} />
				</button>
			</div>
			<div className="mobile">
				<button className="menu-mobile" onClick={handleModalClick}>
					<FontAwesomeIcon icon={faBars} />
				</button>
				{showModal && (
					<div className="menu-modal">
						<button className="close-modal" onClick={handleModalClick}>
							<FontAwesomeIcon icon={faTimes} />
						</button>
						<div className="language-switch-mobile">
							<span
								className={currentLanguage === "fr" ? "active" : ""}
								onClick={() => onLanguageChange("fr")}
							>
								FR
							</span>{" "}
							/
							<span
								className={currentLanguage === "en" ? "active" : ""}
								onClick={() => onLanguageChange("en")}
							>
								EN
							</span>
						</div>
						<button className="theme-mobile" onClick={toggleTheme}>
							<FontAwesomeIcon
								icon={currentTheme === "dark" ? faSun : faMoon}
							/>
						</button>
						<div className="mobile-links">

							<a href="#Services">
								<FormattedMessage
									id="navbar.service"
									defaultMessage="Services"
								/>
							</a>
							<a href="#About">
								<FormattedMessage id="navbar.about" defaultMessage="About" />
							</a>

							<a href="#Contact">
								<FormattedMessage
									id="navbar.contact"
									defaultMessage="Contact"
								/>
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
