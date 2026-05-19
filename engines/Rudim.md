# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.1 | 2026-05-16 | 1739<sub>(-11) | 1986<sub>(+22) | 2082<sub>(+118) |  |
| 2.1.0 | 2026-05-14 | 1750<sub>(+83) | 1964<sub>(+33) | 1964<sub>(-7) |  |
| 2.0.0 | 2026-05-03 | 1667<sub>(+62) | 1931<sub>(+71) | 1971<sub>(-3) |  |
| 1.5 | 2026-04-28 | 1605<sub>(+new) | 1860<sub>(+new) | 1974<sub>(+new) |  |
| 1.4.1 | 2024-12-18 |  |  |  |  |
| 1.3 | 2024-12-05 |  |  |  |  |
| 1.2 | 2022-02-24 |  |  |  |  |
| 1.1 | 2022-02-07 |  |  |  |  |
| 1.0 | 2022-02-06 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rudim+<version>&body=###%20Engine%20name%0ARudim%0A%0A###%20Version%0A2.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:28:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1"]
  y-axis "Elo Rating" 1600 --> 2100
  line "STC (8.0+0.08s)" [1605, 1667, 1750, 1739]
  line "STC (8.0+0.08s)" [1605, 1667, 1750, 1739]
  line "LTC (60.0+0.60s)" [1860, 1931, 1964, 1986]
  line "VLTC (2m24s+1.12s)" [1974, 1971, 1964, 2082]
  line "VLTC (2m24s+1.12s)" [1974, 1971, 1964, 2082]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2082 | 40 | 232 | 46% | 2111 | 22% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 1986 | 35 | 288 | 46% | 2020 | 28% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 1739 | 45 | 180 | 49% | 1744 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1964 | 34 | 292 | 51% | 1956 | 25% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1964 | 34 | 288 | 50% | 1966 | 26% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1750 | 35 | 276 | 49% | 1754 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1971 | 35 | 294 | 49% | 1982 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1931 | 33 | 336 | 51% | 1920 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1667 | 34 | 306 | 47% | 1700 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1974 | 37 | 264 | 47% | 2005 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1860 | 35 | 296 | 50% | 1863 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1605 | 34 | 320 | 53% | 1574 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |