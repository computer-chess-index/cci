# Engine: JackyChess

Author: Matthias Lang

Home: https://github.com/matthiaslang/jackychess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.12 | 2025-12-03 |  | 2597 | 2727 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.12 | 2025-12-03 |  | 2692 | 2768 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.12 | 2025-12-03 | 2252 | 2655 | 2772 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+JackyChess+<version>&body=###%20Engine%20name%0AJackyChess%0A%0A###%20Version%0A25.12" target="_blank">Submit new version</a>

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

Generated: 2026-10-18 04:39:29



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 25.12 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2772 | 25 | 518 | 50% | 2776 | 33% |
|  |  | P1 | 2768 | 38 | 234 | 56% | 2684 | 35% |
|  |  | E1 | 2727 | 35 | 286 | 55% | 2672 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2655 | 23 | 602 | 52% | 2641 | 35% |
|  |  | P1 | 2692 | 42 | 204 | 57% | 2554 | 28% |
|  |  | E1 | 2597 | 39 | 218 | 51% | 2591 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2252 | 44 | 180 | 54% | 2218 | 25% |