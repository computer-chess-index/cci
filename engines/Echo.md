# Engine: Echo

Author: Ali Moumneh

Home: https://github.com/AM-ML/Echo

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.1 | 2026-07-04 | 1868 | 2105 | 2180 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.1 | 2026-07-04 | 1976 | 2255 | 2283 |  |
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

Generated: 2026-10-14 04:38:13



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2180 | 41 | 198 | 49% | 2195 | 30% |
|  |  | T1 | 2288 | 33 | 320 | 50% | 2283 | 28% |
|  |  | P1 | 2283 | 44 | 168 | 49% | 2303 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2105 | 39 | 234 | 50% | 2107 | 23% |
|  |  | T1 | 2241 | 33 | 324 | 49% | 2226 | 27% |
|  |  | P1 | 2255 | 45 | 170 | 47% | 2282 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1868 | 40 | 218 | 50% | 1867 | 22% |
|  |  | T1 | 1995 | 33 | 330 | 52% | 1970 | 20% |
|  |  | P1 | 1976 | 42 | 208 | 47% | 2021 | 18% |