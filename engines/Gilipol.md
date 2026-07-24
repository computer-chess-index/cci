# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2665<sub>(+132) | 2974<sub>(+120) | 3097<sub>(+103) |  |
| 1.00netbin | 2026-04-13 | 2533<sub>(+2144) | 2854<sub>(+2404) | 2994<sub>(+2534) |  |
| 1.00 | 2026-04-12 | 389 | 450 | 460 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gilipol+<version>&body=###%20Engine%20name%0AGilipol%0A%0A###%20Version%0A2.00" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-24 06:25:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 300 --> 3100
  line "STC (8.0+0.08s)" [389, 2533, 2665]
  line "STC (8.0+0.08s)" [389, 2533, 2665]
  line "LTC (60.0+0.60s)" [450, 2854, 2974]
  line "VLTC (2m24s+1.12s)" [460, 2994, 3097]
  line "VLTC (2m24s+1.12s)" [460, 2994, 3097]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | 3097 | 27 | 386 | 53% | 3071 | 53% |
| 2.00 | LTC <sub>(60.0+0.60s)</sub> | 2974 | 29 | 352 | 51% | 2962 | 45% |
| 2.00 | STC <sub>(8.0+0.08s)</sub> | 2665 | 31 | 332 | 53% | 2639 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | 2994 | 28 | 426 | 57% | 2776 | 41% |
| 1.00netbin | LTC <sub>(60.0+0.60s)</sub> | 2854 | 25 | 546 | 59% | 2677 | 39% |
| 1.00netbin | STC <sub>(8.0+0.08s)</sub> | 2533 | 28 | 470 | 55% | 2371 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | 460 | 58 | 176 | 24% | 1048 | 21% |
| 1.00 | LTC <sub>(60.0+0.60s)</sub> | 450 | 59 | 148 | 27% | 941 | 30% |
| 1.00 | STC <sub>(8.0+0.08s)</sub> | 389 | 55 | 132 | 34% | 729 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |