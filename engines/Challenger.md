# Engine: Challenger

Author: Simjanovski Nikola

Home: https://github.com/SimjanovskiNikola/FRI_Challenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2025-10-02 | 2003 | 2326 | 2500 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2025-10-02 | 2056 | 2367 | 2591 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2025-10-02 | 2060 | 2369 | 2481 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Challenger+<version>&body=###%20Engine%20name%0AChallenger%0A%0A###%20Version%0A0.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-01 05:36:56



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2481 | 27 | 468 | 47% | 2511 | 29% |
|  |  | P1 | 2591 | 42 | 192 | 47% | 2643 | 30% |
|  |  | E1 | 2500 | 38 | 264 | 51% | 2491 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2369 | 24 | 586 | 49% | 2377 | 27% |
|  |  | P1 | 2367 | 44 | 172 | 49% | 2384 | 30% |
|  |  | E1 | 2326 | 36 | 282 | 54% | 2269 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2056 | 45 | 180 | 48% | 2094 | 19% |
|  |  | E1 | 2003 | 35 | 274 | 45% | 2045 | 27% |
|  |  | T1 | 2060 | 22 | 774 | 49% | 2063 | 22% |