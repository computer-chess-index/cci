# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-05-14 | 1778<sub>(+96) | 2005<sub>(+47) | 1983<sub>(-19) |  |
| 2.0.0 | 2026-05-03 | 1682<sub>(+66) | 1958<sub>(+75) | 2002<sub>(-3) |  |
| 1.5 | 2026-04-28 | 1616<sub>(+new) | 1883<sub>(+new) | 2005<sub>(+new) |  |
| 1.4.1 | 2024-12-18 |  |  |  |  |
| 1.3 | 2024-12-05 |  |  |  |  |
| 1.2 | 2022-02-24 |  |  |  |  |
| 1.1 | 2022-02-07 |  |  |  |  |
| 1.0 | 2022-02-06 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rudim+<version>&body=###%20Engine%20name%0ARudim%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-16 06:27:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1600 --> 2100
  line "STC (8.0+0.08s)" [1616, 1682, 1778]
  line "STC (8.0+0.08s)" [1616, 1682, 1778]
  line "LTC (60.0+0.60s)" [1883, 1958, 2005]
  line "VLTC (2m24s+1.12s)" [2005, 2002, 1983]
  line "VLTC (2m24s+1.12s)" [2005, 2002, 1983]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1983 | 38 | 232 | 51% | 1970 | 25% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2005 | 39 | 226 | 50% | 1999 | 27% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1778 | 40 | 208 | 50% | 1778 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2002 | 35 | 294 | 49% | 2013 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1958 | 33 | 336 | 51% | 1947 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1682 | 34 | 306 | 47% | 1715 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2005 | 37 | 264 | 47% | 2036 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1883 | 35 | 296 | 50% | 1887 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1616 | 34 | 320 | 53% | 1584 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |