# Engine: Echo

Author: Ali Moumneh

Home: https://github.com/AM-ML/Echo

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.1 | 2026-07-04 | 1931 | 2174 | 2232 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.1 | 2026-07-04 | 1943 | 2214 | 2257 |  |
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

Generated: 2026-10-23 04:38:14



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2232 | 37 | 250 | 47% | 2263 | 28% |
|  |  | T1 | 2288 | 33 | 320 | 50% | 2283 | 28% |
|  |  | P1 | 2257 | 43 | 180 | 49% | 2269 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2174 | 36 | 270 | 49% | 2180 | 23% |
|  |  | T1 | 2241 | 33 | 324 | 49% | 2226 | 27% |
|  |  | P1 | 2214 | 43 | 194 | 47% | 2257 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1995 | 33 | 330 | 52% | 1970 | 20% |
|  |  | P1 | 1943 | 40 | 224 | 47% | 1983 | 19% |
|  |  | E1 | 1931 | 38 | 246 | 50% | 1933 | 22% |