# Engine: CeeChess

Author: Tom Reinitz

Home: https://github.com/bctboi23/CeeChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2025-11-05 | 2115 | 2408 | 2504 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2025-11-05 | 2039 | 2350 | 2445 |  |
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

Generated: 2026-11-15 05:36:49



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2504 | 31 | 360 | 51% | 2488 | 24% |
|  |  | T1 | 2488 | 26 | 478 | 48% | 2506 | 31% |
|  |  | P1 | 2445 | 32 | 328 | 52% | 2395 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2408 | 34 | 324 | 54% | 2360 | 24% |
|  |  | T1 | 2407 | 24 | 552 | 49% | 2417 | 30% |
|  |  | P1 | 2350 | 39 | 244 | 49% | 2357 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2115 | 32 | 336 | 49% | 2132 | 26% |
|  |  | T1 | 2156 | 23 | 674 | 50% | 2151 | 22% |
|  |  | P1 | 2039 | 36 | 260 | 50% | 2039 | 26% |