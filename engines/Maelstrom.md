# Engine: Maelstrom

Author: Saigautam Bonam

Home: https://github.com/saisree27/Maelstrom

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2025-08-27 | 2716 | 3123 | 3177 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3.0 | 2025-08-27 | 2857 | 3198 | 3349 |  |
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

Generated: 2026-10-21 04:40:24



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3177 | 23 | 496 | 49% | 3185 | 63% |
|  |  | P1 | 3349 | 38 | 184 | 51% | 3330 | 60% |
|  |  | E1 | 3177 | 31 | 316 | 57% | 3050 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3073 | 23 | 538 | 51% | 3058 | 54% |
|  |  | P1 | 3198 | 37 | 224 | 55% | 3117 | 49% |
|  |  | E1 | 3123 | 32 | 296 | 52% | 3077 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2742 | 22 | 658 | 50% | 2732 | 36% |
|  |  | P1 | 2857 | 37 | 228 | 51% | 2843 | 36% |
|  |  | E1 | 2716 | 32 | 316 | 47% | 2747 | 33% |