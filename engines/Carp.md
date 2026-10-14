# Engine: Carp

Author: Andrea Sgobbi

Home: https://github.com/dede1751/carp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.1 | 2023-09-25 | 2946 | 3232 | 3275 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.1 | 2023-09-25 | 3140 | 3413 | 3495 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.1 | 2023-09-25 | 3024 | 3283 | 3349 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Carp+<version>&body=###%20Engine%20name%0ACarp%0A%0A###%20Version%0A3.0.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-14 04:36:45



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3275 | 31 | 270 | 53% | 3255 | 66% |
|  |  | P1 | 3495 | 36 | 206 | 55% | 3447 | 66% |
|  |  | T1 | 3349 | 11 | 2114 | 49% | 3352 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3283 | 12 | 1966 | 50% | 3285 | 63% |
|  |  | E1 | 3232 | 36 | 209 | 50% | 3227 | 59% |
|  |  | P1 | 3413 | 39 | 184 | 52% | 3394 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3024 | 12 | 2040 | 51% | 3011 | 47% |
|  |  | E1 | 2946 | 31 | 304 | 47% | 2974 | 50% |
|  |  | P1 | 3140 | 38 | 190 | 52% | 3125 | 53% |