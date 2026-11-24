# Engine: Wasp

Author: John Stanback

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.0 | 2023-02-28 | 3020 | 3285 | 3371 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.0 | 2023-02-28 | 3009 | 3278 | 3299 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.0 | 2023-02-28 | 3065 | 3278 | 3336 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Wasp+<version>&body=###%20Engine%20name%0AWasp%0A%0A###%20Version%0A6.5.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:44:37



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3336 | 12 | 1932 | 50% | 3336 | 66% |
|  |  | E1 | 3371 | 26 | 396 | 49% | 3375 | 65% |
|  |  | P1 | 3299 | 31 | 280 | 51% | 3291 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3278 | 28 | 352 | 55% | 3236 | 62% |
|  |  | E1 | 3285 | 26 | 394 | 50% | 3286 | 61% |
|  |  | T1 | 3278 | 12 | 1914 | 50% | 3282 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3009 | 31 | 296 | 48% | 3031 | 49% |
|  |  | E1 | 3020 | 25 | 478 | 47% | 3046 | 49% |
|  |  | T1 | 3065 | 12 | 2060 | 50% | 3067 | 53% |