# Engine: Dog

Author: Folkert van Heusden

Home: https://github.com/folkertvanheusden/Dog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.10.2 | 2025-12-05 | 2789 | 3098 | 3198 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.10.2 | 2025-12-05 | 2943 | 3171 | 3240 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.10.2 | 2025-12-05 | 2812 | 3044 | 3104 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dog+<version>&body=###%20Engine%20name%0ADog%0A%0A###%20Version%0A4.10.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-04 05:37:52



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.10.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3198 | 30 | 334 | 55% | 3150 | 46% |
|  |  | T1 | 3104 | 22 | 606 | 53% | 3074 | 55% |
|  |  | P1 | 3240 | 35 | 244 | 56% | 3155 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3098 | 31 | 332 | 50% | 3071 | 45% |
|  |  | T1 | 3044 | 24 | 498 | 52% | 3029 | 54% |
|  |  | P1 | 3171 | 37 | 220 | 53% | 3105 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2812 | 20 | 780 | 49% | 2820 | 40% |
|  |  | P1 | 2943 | 40 | 200 | 49% | 2958 | 36% |
|  |  | E1 | 2789 | 29 | 396 | 46% | 2831 | 33% |