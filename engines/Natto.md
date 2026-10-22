# Engine: Natto

Author: 

Home: https://github.com/rglenister/natto

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1.9 | 2025-09-06 | 1593 | 1740 | 1855 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.1.9 | 2025-09-06 | 1655 | 1845 | 1868 |  |
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

Generated: 2026-10-22 04:41:03



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1.9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1937 | 23 | 644 | 48% | 1971 | 27% |
|  |  | P1 | 1868 | 42 | 200 | 46% | 1958 | 27% |
|  |  | E1 | 1855 | 32 | 348 | 40% | 2002 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1845 | 40 | 244 | 56% | 1775 | 25% |
|  |  | E1 | 1740 | 39 | 242 | 48% | 1777 | 23% |
|  |  | T1 | 1847 | 24 | 618 | 50% | 1863 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1655 | 41 | 210 | 53% | 1642 | 24% |
|  |  | E1 | 1593 | 38 | 252 | 47% | 1644 | 25% |
|  |  | T1 | 1601 | 23 | 652 | 46% | 1648 | 27% |