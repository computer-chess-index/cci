# Engine: Echo

Author: Ali Moumneh

Home: https://github.com/AM-ML/Echo

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.1 | 2026-07-04 | 1976 | 2196 | 2263 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.1 | 2026-07-04 | 2009 | 2272 | 2325 |  |
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

Generated: 2026-11-04 05:38:03



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2325 | 41 | 192 | 50% | 2331 | 31% |
|  |  | E1 | 2263 | 34 | 286 | 47% | 2291 | 30% |
|  |  | T1 | 2288 | 33 | 320 | 50% | 2283 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2196 | 34 | 306 | 49% | 2210 | 22% |
|  |  | T1 | 2241 | 33 | 324 | 49% | 2226 | 27% |
|  |  | P1 | 2272 | 41 | 206 | 46% | 2319 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1976 | 36 | 266 | 50% | 1971 | 22% |
|  |  | T1 | 1995 | 33 | 330 | 52% | 1970 | 20% |
|  |  | P1 | 2009 | 39 | 240 | 47% | 2047 | 19% |