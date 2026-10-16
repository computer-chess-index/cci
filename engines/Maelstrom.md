# Engine: Maelstrom

Author: Saigautam Bonam

Home: https://github.com/saisree27/Maelstrom

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2025-08-27 | 2650 | 3058 | 3120 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2025-08-27 | 2849 | 3190 | 3340 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2025-08-27 | 2742 | 3073 | 3177 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Maelstrom+<version>&body=###%20Engine%20name%0AMaelstrom%0A%0A###%20Version%0A3.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-16 04:40:37



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3120 | 33 | 284 | 58% | 2973 | 47% |
|  |  | T1 | 3177 | 23 | 496 | 49% | 3185 | 63% |
|  |  | P1 | 3340 | 39 | 176 | 51% | 3320 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3073 | 23 | 538 | 51% | 3058 | 54% |
|  |  | P1 | 3190 | 38 | 208 | 56% | 3102 | 48% |
|  |  | E1 | 3058 | 33 | 264 | 52% | 3015 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2742 | 22 | 658 | 50% | 2732 | 36% |
|  |  | P1 | 2849 | 38 | 212 | 51% | 2839 | 37% |
|  |  | E1 | 2650 | 33 | 296 | 46% | 2691 | 34% |