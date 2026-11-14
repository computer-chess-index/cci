# Engine: Natto

Author: 

Home: https://github.com/rglenister/natto

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1.9 | 2025-09-06 | 1632 | 1775 | 1882 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1.9 | 2025-09-06 | 1605 | 1755 | 1787 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1.9 | 2025-09-06 | 1601 | 1847 | 1937 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Natto+<version>&body=###%20Engine%20name%0ANatto%0A%0A###%20Version%0A0.1.9" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:40:14



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1.9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1937 | 23 | 644 | 48% | 1971 | 27% |
|  |  | P1 | 1787 | 39 | 232 | 46% | 1858 | 28% |
|  |  | E1 | 1882 | 28 | 466 | 44% | 1978 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1755 | 37 | 276 | 53% | 1731 | 25% |
|  |  | E1 | 1775 | 34 | 322 | 50% | 1808 | 23% |
|  |  | T1 | 1847 | 24 | 618 | 50% | 1863 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1605 | 37 | 262 | 54% | 1574 | 24% |
|  |  | E1 | 1632 | 32 | 354 | 49% | 1665 | 25% |
|  |  | T1 | 1601 | 23 | 652 | 46% | 1648 | 27% |