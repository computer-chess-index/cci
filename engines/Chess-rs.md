# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1724<sub>(+23) | 1958<sub>(+67) | 2079<sub>(+59) |  |
| 0.6.0 | 2025-11-11 | 1701<sub>(+new) | 1891<sub>(+new) | 2020<sub>(+new) |  |
| 0.5.1 | 2025-11-04 |  |  |  | no public available .exe |
| 0.5.0 | 2025-11-03 | 1598<sub>(+new) | 1821<sub>(+new) | 1924<sub>(+new) |  |
| 0.4.2 | 2025-10-13 |  |  |  |  |
| 0.4.1 | 2025-10-09 |  |  |  |  |
| 0.4.0 | 2025-10-09 |  |  |  |  |
| 0.3.0 | 2025-10-05 |  |  |  |  |
| 0.2.0 | 2023-03-12 |  |  |  |  |
| 0.1.1 | 2022-12-03 |  |  |  |  |
| 0.1.0 | 2022-12-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess-rs+<version>&body=###%20Engine%20name%0AChess-rs%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-05 06:23:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "STC (8.0+0.08s)" [1598, 1701, 1724]
  line "STC (8.0+0.08s)" [1598, 1701, 1724]
  line "LTC (60.0+0.60s)" [1821, 1891, 1958]
  line "VLTC (2m24s+1.12s)" [1924, 2020, 2079]
  line "VLTC (2m24s+1.12s)" [1924, 2020, 2079]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2079 | 27 | 484 | 50% | 2080 | 22% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1958 | 27 | 506 | 49% | 1968 | 23% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1724 | 27 | 530 | 50% | 1719 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2020 | 44 | 184 | 49% | 2029 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1891 | 50 | 146 | 50% | 1895 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1701 | 54 | 124 | 50% | 1700 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1924 | 49 | 148 | 49% | 1933 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1821 | 46 | 176 | 47% | 1856 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1598 | 49 | 156 | 47% | 1627 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |