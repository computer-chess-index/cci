# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-05-14 | 1764<sub>(+76) | 1982<sub>(+29) | 1955<sub>(-46) |  |
| 2.0.0 | 2026-05-03 | 1688<sub>(+73) | 1953<sub>(+71) | 2001<sub>(-2) |  |
| 1.5 | 2026-04-28 | 1615<sub>(+new) | 1882<sub>(+new) | 2003<sub>(+new) |  |
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

Generated: 2026-05-15 06:27:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1600 --> 2100
  line "STC (8.0+0.08s)" [1615, 1688, 1764]
  line "STC (8.0+0.08s)" [1615, 1688, 1764]
  line "LTC (60.0+0.60s)" [1882, 1953, 1982]
  line "VLTC (2m24s+1.12s)" [2003, 2001, 1955]
  line "VLTC (2m24s+1.12s)" [2003, 2001, 1955]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1955 | 48 | 148 | 51% | 1947 | 26% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1982 | 47 | 152 | 50% | 1978 | 26% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1764 | 52 | 120 | 50% | 1767 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2001 | 35 | 294 | 49% | 2012 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1953 | 33 | 332 | 50% | 1948 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1688 | 35 | 298 | 48% | 1709 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2003 | 37 | 264 | 47% | 2036 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1882 | 35 | 296 | 50% | 1886 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1615 | 34 | 320 | 53% | 1584 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |