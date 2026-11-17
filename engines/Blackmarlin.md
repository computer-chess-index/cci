# Engine: Blackmarlin

Author: Doruk Sekercioglu

Home: https://github.com/jnlt3/blackmarlin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2024-02-28 | 3167 | 3414 | 3459 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2024-02-28 | 3128 | 3341 | 3418 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2024-02-28 | 3194 | 3391 | 3428 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Blackmarlin+<version>&body=###%20Engine%20name%0ABlackmarlin%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:36:34



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3418 | 38 | 172 | 49% | 3424 | 74% |
|  |  | E1 | 3459 | 29 | 310 | 51% | 3448 | 67% |
|  |  | T1 | 3428 | 11 | 2021 | 50% | 3428 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3341 | 33 | 236 | 51% | 3329 | 72% |
|  |  | E1 | 3414 | 26 | 376 | 50% | 3414 | 64% |
|  |  | T1 | 3391 | 11 | 2056 | 50% | 3395 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3128 | 32 | 276 | 49% | 3136 | 53% |
|  |  | E1 | 3167 | 24 | 504 | 46% | 3198 | 50% |
|  |  | T1 | 3194 | 11 | 2216 | 51% | 3167 | 56% |