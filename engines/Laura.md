# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1731<sub>(+168) | 1894<sub>(+205) | 1986<sub>(+184) |  |
| 3.0.0 | 2026-04-29 | 1563<sub>(+213) | 1689<sub>(+31) | 1802<sub>(+120) |  |
| 2.0.0 | 2026-04-23 | 1350<sub>(+59) | 1658<sub>(+188) | 1682<sub>(+281) |  |
| 1.1.0 | 2026-01-26 | 1291 | 1470 | 1401 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Laura+<version>&body=###%20Engine%20name%0ALaura%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-15 06:26:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1200 --> 2000
  line "STC (8.0+0.08s)" [1291, 1350, 1563, 1731]
  line "STC (8.0+0.08s)" [1291, 1350, 1563, 1731]
  line "LTC (60.0+0.60s)" [1470, 1658, 1689, 1894]
  line "VLTC (2m24s+1.12s)" [1401, 1682, 1802, 1986]
  line "VLTC (2m24s+1.12s)" [1401, 1682, 1802, 1986]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1986 | 44 | 192 | 51% | 1982 | 18% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1894 | 42 | 216 | 50% | 1894 | 15% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1731 | 42 | 216 | 52% | 1715 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1802 | 51 | 152 | 50% | 1782 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1689 | 53 | 136 | 50% | 1698 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1563 | 54 | 126 | 49% | 1571 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1682 | 56 | 98 | 53% | 1663 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1658 | 55 | 104 | 48% | 1685 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1350 | 56 | 108 | 55% | 1281 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1401 | 52 | 132 | 43% | 1575 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1470 | 51 | 134 | 43% | 1597 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1291 | 62 | 134 | 47% | 1337 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |