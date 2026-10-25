# Engine: CeeChess

Author: Tom Reinitz

Home: https://github.com/bctboi23/CeeChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2025-11-05 | 2165 | 2464 | 2558 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2025-11-05 | 2117 | 2473 | 2589 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2025-11-05 | 2156 | 2407 | 2488 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+CeeChess+<version>&body=###%20Engine%20name%0ACeeChess%0A%0A###%20Version%0A2.2" target="_blank">Submit new version</a>

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

Generated: 2026-10-25 05:36:43



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2558 | 37 | 272 | 51% | 2538 | 22% |
|  |  | T1 | 2488 | 26 | 478 | 48% | 2506 | 31% |
|  |  | P1 | 2589 | 35 | 288 | 55% | 2502 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2464 | 39 | 248 | 57% | 2385 | 25% |
|  |  | T1 | 2407 | 24 | 552 | 49% | 2417 | 30% |
|  |  | P1 | 2473 | 47 | 168 | 49% | 2496 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2165 | 36 | 272 | 50% | 2160 | 25% |
|  |  | T1 | 2156 | 23 | 674 | 50% | 2151 | 22% |
|  |  | P1 | 2117 | 41 | 200 | 51% | 2109 | 27% |