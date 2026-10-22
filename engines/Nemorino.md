# Engine: Nemorino

Author: Christian Guenther

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.00 | 2020-09-28 | 2962 | 3268 | 3329 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.00 | 2020-09-28 | 3093 | 3379 | 3459 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.00 | 2020-09-28 | 2994 | 3244 | 3313 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Nemorino+<version>&body=###%20Engine%20name%0ANemorino%0A%0A###%20Version%0A6.00" target="_blank">Submit new version</a>

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

Generated: 2026-10-22 04:41:07



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.00 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3459 | 32 | 260 | 48% | 3472 | 58% |
|  |  | T1 | 3313 | 12 | 1904 | 49% | 3317 | 64% |
|  |  | E1 | 3329 | 33 | 248 | 53% | 3308 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3244 | 12 | 1888 | 50% | 3243 | 60% |
|  |  | P1 | 3379 | 37 | 208 | 56% | 3321 | 53% |
|  |  | E1 | 3268 | 31 | 290 | 51% | 3252 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2994 | 12 | 2016 | 50% | 2989 | 46% |
|  |  | E1 | 2962 | 30 | 340 | 47% | 2985 | 44% |
|  |  | P1 | 3093 | 34 | 258 | 50% | 3094 | 43% |