# Engine: Prometheus

Author: Gisi Alex

Home: https://github.com/AlexGisi/prometheus-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2.1 | 2025-08-18 | 1438 | 1532 | 1570 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2.1 | 2025-08-18 | 1350 | 1466 | 1582 |  |
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

Generated: 2026-11-14 05:41:01



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1551 | 25 | 608 | 43% | 1655 | 19% |
|  |  | P1 | 1582 | 45 | 194 | 45% | 1685 | 17% |
|  |  | E1 | 1570 | 32 | 370 | 45% | 1670 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1466 | 43 | 194 | 45% | 1517 | 21% |
|  |  | E1 | 1532 | 33 | 358 | 45% | 1609 | 13% |
|  |  | T1 | 1532 | 26 | 566 | 48% | 1575 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1350 | 42 | 222 | 51% | 1332 | 16% |
|  |  | E1 | 1438 | 33 | 318 | 50% | 1439 | 23% |
|  |  | T1 | 1393 | 27 | 572 | 51% | 1382 | 18% |