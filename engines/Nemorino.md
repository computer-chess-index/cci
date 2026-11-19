# Engine: Nemorino

Author: Christian Guenther

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.00 | 2020-09-28 | 2939 | 3237 | 3303 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.00 | 2020-09-28 | 2935 | 3206 | 3278 |  |
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

Generated: 2026-11-19 05:40:48



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.00 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3278 | 29 | 316 | 48% | 3286 | 59% |
|  |  | T1 | 3313 | 12 | 1904 | 49% | 3317 | 64% |
|  |  | E1 | 3303 | 28 | 354 | 51% | 3291 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3244 | 12 | 1888 | 50% | 3243 | 60% |
|  |  | P1 | 3206 | 32 | 280 | 55% | 3160 | 54% |
|  |  | E1 | 3237 | 26 | 406 | 50% | 3233 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2994 | 12 | 2016 | 50% | 2989 | 46% |
|  |  | P1 | 2935 | 31 | 310 | 49% | 2948 | 42% |
|  |  | E1 | 2939 | 26 | 460 | 46% | 2977 | 43% |