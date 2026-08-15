# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2919<sub>(+216) | 3255<sub>(+162) | 3351<sub>(+178) |  |
| 3.1 | 2026-07-15 | 2703<sub>(+376) | 3093<sub>(+101) | 3173<sub>(+130) |  |
| 3.0 | 2026-07-12 | 2327<sub>(+new) | 2992<sub>(+new) | 3043<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 1993<sub>(+114) | 2349<sub>(+134) | 2431<sub>(+24) |  |
| 0.1.0 | 2026-02-17 | 1879 | 2215 | 2407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-15 06:29:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "STC (8.0+0.08s)" [1879, 1993, 2327, 2703, 2919]
  line "STC (8.0+0.08s)" [1879, 1993, 2327, 2703, 2919]
  line "LTC (60.0+0.60s)" [2215, 2349, 2992, 3093, 3255]
  line "VLTC (2m24s+1.12s)" [2407, 2431, 3043, 3173, 3351]
  line "VLTC (2m24s+1.12s)" [2407, 2431, 3043, 3173, 3351]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3351 | 33 | 226 | 48% | 3366 | 77% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3255 | 38 | 176 | 53% | 3232 | 74% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2919 | 38 | 176 | 55% | 2884 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3173 | 44 | 132 | 50% | 3170 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3093 | 44 | 132 | 52% | 3082 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2703 | 46 | 126 | 51% | 2689 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3043 | 48 | 124 | 56% | 2978 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2992 | 56 | 96 | 54% | 2944 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2327 | 34 | 240 | 65% | 2217 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2431 | 36 | 254 | 53% | 2407 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2349 | 33 | 304 | 50% | 2344 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1993 | 34 | 306 | 51% | 1982 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2407 | 126 | 28 | 21% | 2711 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2215 | 70 | 70 | 46% | 2248 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1879 | 97 | 40 | 41% | 2001 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |