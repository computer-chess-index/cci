# Engine: Maelstrom

Author: Saigautam Bonam

Home: https://github.com/saisree27/Maelstrom

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2025-08-27 | 2770 | 3178 | 3228 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2025-08-27 | 2840 | 3193 | 3341 |  |
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

Generated: 2026-10-27 05:40:12



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3177 | 23 | 496 | 49% | 3185 | 63% |
|  |  | P1 | 3341 | 37 | 192 | 51% | 3322 | 62% |
|  |  | E1 | 3228 | 31 | 320 | 57% | 3102 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3073 | 23 | 538 | 51% | 3058 | 54% |
|  |  | P1 | 3193 | 36 | 232 | 55% | 3110 | 49% |
|  |  | E1 | 3178 | 31 | 308 | 52% | 3135 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2742 | 22 | 658 | 50% | 2732 | 36% |
|  |  | P1 | 2840 | 37 | 232 | 51% | 2828 | 36% |
|  |  | E1 | 2770 | 32 | 324 | 48% | 2799 | 33% |