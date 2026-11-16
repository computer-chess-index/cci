# Engine: Cicada

Author: Mohammad Kayali

Home: https://github.com/mkyl/cicada

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1 | 2017-03-22 | 1304 | 1440 | 1551 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1 | 2017-03-22 | 1312 | 1466 | 1534 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1 | 2017-03-22 | 1303 | 1516 | 1543 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cicada+<version>&body=###%20Engine%20name%0ACicada%0A%0A###%20Version%0A0.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:37:24



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1534 | 38 | 244 | 51% | 1524 | 21% |
|  |  | E1 | 1551 | 31 | 362 | 48% | 1577 | 24% |
|  |  | T1 | 1543 | 31 | 380 | 46% | 1590 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1466 | 42 | 194 | 51% | 1453 | 24% |
|  |  | E1 | 1440 | 31 | 356 | 48% | 1461 | 24% |
|  |  | T1 | 1516 | 32 | 344 | 49% | 1521 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1304 | 31 | 384 | 49% | 1341 | 22% |
|  |  | T1 | 1303 | 32 | 358 | 49% | 1310 | 20% |
|  |  | P1 | 1312 | 41 | 214 | 50% | 1369 | 21% |