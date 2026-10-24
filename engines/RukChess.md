# Engine: RukChess

Author: Ilya Rukavishnikov

Home: https://github.com/Ilya-Ruk/RukChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-01-11 | 2827 | 3146 | 3276 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-01-11 | 2909 | 3293 | 3349 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-01-11 | 2826 | 3139 | 3206 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+RukChess+<version>&body=###%20Engine%20name%0ARukChess%0A%0A###%20Version%0A4.2.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-24 04:42:55



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3349 | 37 | 208 | 53% | 3301 | 54% |
|  |  | E1 | 3276 | 31 | 334 | 56% | 3170 | 45% |
|  |  | T1 | 3206 | 23 | 540 | 50% | 3197 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3293 | 37 | 230 | 54% | 3222 | 46% |
|  |  | E1 | 3146 | 31 | 332 | 56% | 3065 | 40% |
|  |  | T1 | 3139 | 23 | 536 | 51% | 3131 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2909 | 32 | 286 | 47% | 2940 | 45% |
|  |  | E1 | 2827 | 30 | 348 | 47% | 2850 | 36% |
|  |  | T1 | 2826 | 21 | 714 | 51% | 2815 | 34% |