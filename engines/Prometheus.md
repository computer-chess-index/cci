# Engine: Prometheus

Author: Gisi Alex

Home: https://github.com/AlexGisi/prometheus-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2.1 | 2025-08-18 | 1407 | 1496 | 1540 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2.1 | 2025-08-18 | 1346 | 1562 | 1655 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2.1 | 2025-08-18 | 1393 | 1532 | 1551 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prometheus+<version>&body=###%20Engine%20name%0APrometheus%0A%0A###%20Version%0A0.2.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-21 04:41:52



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1551 | 25 | 608 | 43% | 1655 | 19% |
|  |  | P1 | 1655 | 52 | 152 | 45% | 1742 | 14% |
|  |  | E1 | 1540 | 39 | 270 | 44% | 1677 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1532 | 26 | 566 | 48% | 1575 | 18% |
|  |  | P1 | 1562 | 51 | 134 | 48% | 1584 | 22% |
|  |  | E1 | 1496 | 38 | 286 | 45% | 1590 | 11% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1393 | 27 | 572 | 51% | 1382 | 18% |
|  |  | P1 | 1346 | 47 | 172 | 47% | 1374 | 16% |
|  |  | E1 | 1407 | 40 | 224 | 50% | 1407 | 21% |