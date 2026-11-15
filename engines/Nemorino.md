# Engine: Nemorino

Author: Christian Guenther

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.00 | 2020-09-28 | 2940 | 3235 | 3299 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.00 | 2020-09-28 | 2919 | 3201 | 3278 |  |
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

Generated: 2026-11-15 05:40:32



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.00 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3278 | 29 | 312 | 48% | 3287 | 60% |
|  |  | T1 | 3313 | 12 | 1904 | 49% | 3317 | 64% |
|  |  | E1 | 3299 | 28 | 342 | 51% | 3287 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3244 | 12 | 1888 | 50% | 3243 | 60% |
|  |  | E1 | 3235 | 27 | 394 | 50% | 3229 | 56% |
|  |  | P1 | 3201 | 32 | 276 | 55% | 3155 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2994 | 12 | 2016 | 50% | 2989 | 46% |
|  |  | E1 | 2940 | 26 | 440 | 46% | 2975 | 43% |
|  |  | P1 | 2919 | 32 | 302 | 49% | 2925 | 42% |