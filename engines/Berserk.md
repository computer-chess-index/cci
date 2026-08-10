# Engine: Berserk

Author: Jay Honnold

Home: https://github.com/jhonnold/berserk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.7.0 | 2026-05-24 |  |  |  |  |
| 14 | 2026-05-24 | 3420<sub>(+1838) | 3533<sub>(+16) | 3567<sub>(+26) |  |
| 13 | 2024-03-31 | 1582 | 3517 | 3541 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Berserk+<version>&body=###%20Engine%20name%0ABerserk%0A%0A###%20Version%0A4.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-10 06:59:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1500 --> 3600
  line "STC (8.0+0.08s)" [1582, 3420]
  line "STC (8.0+0.08s)" [1582, 3420]
  line "LTC (60.0+0.60s)" [3517, 3533]
  line "VLTC (2m24s+1.12s)" [3541, 3567]
  line "VLTC (2m24s+1.12s)" [3541, 3567]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 31 | 232 | 51% | 3561 | 93% |
| 14 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 32 | 220 | 50% | 3533 | 90% |
| 14 | STC <sub>(8.0+0.08s)</sub> | 3420 | 26 | 362 | 53% | 3337 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 13 | 1458 | 53% | 3467 | 84% |
| 13 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 12 | 1740 | 51% | 3513 | 87% |
| 13 | STC <sub>(8.0+0.08s)</sub> | 1582 | 15 | 1932 | 53% | 1542 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |