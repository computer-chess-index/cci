# Engine: Echo

Author: Ali Moumneh

Home: https://github.com/AM-ML/Echo

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.1 | 2026-07-04 | 1859 | 2115 | 2183 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.1 | 2026-07-04 | 1975 | 2249 | 2294 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.1 | 2026-07-04 | 1995 | 2241 | 2288 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Echo+<version>&body=###%20Engine%20name%0AEcho%0A%0A###%20Version%0A1.0.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-17 04:38:07



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2288 | 33 | 320 | 50% | 2283 | 28% |
|  |  | P1 | 2294 | 43 | 176 | 50% | 2303 | 32% |
|  |  | E1 | 2183 | 39 | 214 | 48% | 2201 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2241 | 33 | 324 | 49% | 2226 | 27% |
|  |  | P1 | 2249 | 44 | 182 | 46% | 2298 | 24% |
|  |  | E1 | 2115 | 38 | 238 | 50% | 2115 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1995 | 33 | 330 | 52% | 1970 | 20% |
|  |  | P1 | 1975 | 41 | 216 | 47% | 2018 | 19% |
|  |  | E1 | 1859 | 39 | 232 | 49% | 1870 | 22% |