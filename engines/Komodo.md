# Engine: Komodo

Author: Dailey Don, Lefler Mark, Kaufmann Larry

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14.1 | 2020-11-01 | 2939 | 3286 | 3353 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14.1 | 2020-11-01 | 2939 | 3237 | 3291 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14.1 | 2020-11-01 | 3016 | 3274 | 3335 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Komodo+<version>&body=###%20Engine%20name%0AKomodo%0A%0A###%20Version%0A14.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:39:35



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 14.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3291 | 28 | 338 | 53% | 3263 | 57% |
|  |  | E1 | 3353 | 27 | 380 | 53% | 3326 | 62% |
|  |  | T1 | 3335 | 12 | 1948 | 51% | 3328 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3286 | 28 | 354 | 51% | 3271 | 56% |
|  |  | T1 | 3274 | 12 | 1924 | 50% | 3275 | 55% |
|  |  | P1 | 3237 | 33 | 256 | 50% | 3228 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2939 | 26 | 488 | 48% | 2961 | 36% |
|  |  | T1 | 3016 | 12 | 1978 | 50% | 3008 | 46% |
|  |  | P1 | 2939 | 34 | 254 | 47% | 2967 | 46% |