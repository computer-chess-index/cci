# Engine: Akimbo

Author: Jamie Whiting

Home: https://github.com/jw1912/akimbo

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2024-05-26 | 3201 | 3448 | 3529 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2024-05-26 | 3416 | 3567 | 3637 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2024-05-26 | 3171 | 3362 | 3406 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Akimbo+<version>&body=###%20Engine%20name%0AAkimbo%0A%0A###%20Version%0A1.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:35:22



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3406 | 11 | 2044 | 52% | 3391 | 71% |
|  |  | P1 | 3637 | 33 | 226 | 51% | 3629 | 69% |
|  |  | E1 | 3529 | 27 | 360 | 50% | 3528 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3567 | 33 | 242 | 53% | 3538 | 65% |
|  |  | E1 | 3448 | 30 | 298 | 49% | 3452 | 64% |
|  |  | T1 | 3362 | 11 | 2000 | 50% | 3363 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3416 | 31 | 286 | 50% | 3414 | 56% |
|  |  | E1 | 3201 | 27 | 382 | 46% | 3232 | 51% |
|  |  | T1 | 3171 | 11 | 2082 | 50% | 3175 | 58% |