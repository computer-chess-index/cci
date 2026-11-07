# Engine: Spaghet

Author: Li Ying

Home: https://github.com/yl25946/spaghet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2024-08-12 | 3270 | 3546 | 3591 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2024-08-12 | 3461 | 3665 | 3717 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2024-08-12 | 3222 | 3433 | 3476 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Spaghet+<version>&body=###%20Engine%20name%0ASpaghet%0A%0A###%20Version%0A3.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:42:36



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3591 | 28 | 312 | 52% | 3578 | 71% |
|  |  | T1 | 3476 | 16 | 954 | 50% | 3474 | 81% |
|  |  | P1 | 3717 | 36 | 180 | 50% | 3719 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3433 | 16 | 954 | 49% | 3437 | 78% |
|  |  | P1 | 3665 | 36 | 182 | 51% | 3661 | 79% |
|  |  | E1 | 3546 | 29 | 284 | 53% | 3525 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3222 | 15 | 1148 | 50% | 3217 | 63% |
|  |  | P1 | 3461 | 32 | 258 | 50% | 3461 | 61% |
|  |  | E1 | 3270 | 25 | 428 | 47% | 3291 | 63% |