# Engine: Cicada

Author: Mohammad Kayali

Home: https://github.com/mkyl/cicada

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1 | 2017-03-22 | 1341 | 1461 | 1573 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1 | 2017-03-22 | 1341 | 1531 | 1609 |  |
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

Generated: 2026-11-01 05:37:15



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1543 | 31 | 380 | 46% | 1590 | 19% |
|  |  | P1 | 1609 | 41 | 216 | 52% | 1594 | 18% |
|  |  | E1 | 1573 | 34 | 300 | 47% | 1620 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1516 | 32 | 344 | 49% | 1521 | 24% |
|  |  | P1 | 1531 | 48 | 152 | 51% | 1516 | 22% |
|  |  | E1 | 1461 | 35 | 292 | 46% | 1505 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1341 | 44 | 180 | 52% | 1358 | 21% |
|  |  | E1 | 1341 | 35 | 296 | 49% | 1373 | 24% |
|  |  | T1 | 1303 | 32 | 358 | 49% | 1310 | 20% |