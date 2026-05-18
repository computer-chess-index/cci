# Engine: Rudim

Author: Vishnu Bhagyanath

Home: https://github.com/znxftw/rudim

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.1 | 2026-05-16 | 1786<sub>(+19) | 2121<sub>(+128) | 2167<sub>(+174) |  |
| 2.1.0 | 2026-05-14 | 1767<sub>(+86) | 1993<sub>(+37) | 1993<sub>(-6) |  |
| 2.0.0 | 2026-05-03 | 1681<sub>(+66) | 1956<sub>(+74) | 1999<sub>(-3) |  |
| 1.5 | 2026-04-28 | 1615<sub>(+new) | 1882<sub>(+new) | 2002<sub>(+new) |  |
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

Generated: 2026-05-18 06:27:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "2.0.0", "2.1.0", "2.1.1"]
  y-axis "Elo Rating" 1600 --> 2200
  line "STC (8.0+0.08s)" [1615, 1681, 1767, 1786]
  line "STC (8.0+0.08s)" [1615, 1681, 1767, 1786]
  line "LTC (60.0+0.60s)" [1882, 1956, 1993, 2121]
  line "VLTC (2m24s+1.12s)" [2002, 1999, 1993, 2167]
  line "VLTC (2m24s+1.12s)" [2002, 1999, 1993, 2167]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2167 | 50 | 142 | 46% | 2206 | 22% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2121 | 56 | 104 | 51% | 2106 | 30% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 1786 | 55 | 116 | 50% | 1785 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1993 | 34 | 292 | 51% | 1985 | 25% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1993 | 34 | 288 | 50% | 1995 | 26% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 1767 | 35 | 276 | 49% | 1770 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1999 | 35 | 294 | 49% | 2010 | 19% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1956 | 33 | 336 | 51% | 1945 | 20% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1681 | 34 | 306 | 47% | 1713 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2002 | 37 | 264 | 47% | 2034 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 1882 | 35 | 296 | 50% | 1886 | 18% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 1615 | 34 | 320 | 53% | 1584 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |