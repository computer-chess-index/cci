# Engine: Fktb

Author: Landon Peng

Home: https://github.com/lunbun/fktb

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1844<sub>(-58) | 2134<sub>(+10) | 2209<sub>(+8) |  |
| 0.0.76 | 2026-01-05 | 1902 | 2124 | 2201 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fktb+<version>&body=###%20Engine%20name%0AFktb%0A%0A###%20Version%0A0.0.77" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-17 06:24:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1800 --> 2300
  line "STC (8.0+0.08s)" [1902, 1844]
  line "STC (8.0+0.08s)" [1902, 1844]
  line "LTC (60.0+0.60s)" [2124, 2134]
  line "VLTC (2m24s+1.12s)" [2201, 2209]
  line "VLTC (2m24s+1.12s)" [2201, 2209]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1800 --> 2300
  line "STC (8.0+0.08s)" [1902, 1844]
  line "STC (8.0+0.08s)" [1902, 1844]
  line "LTC (60.0+0.60s)" [2124, 2134]
  line "VLTC (2m24s+1.12s)" [2201, 2209]
  line "VLTC (2m24s+1.12s)" [2201, 2209]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.77 | VLTC <sub>(2m24s+1.12s)</sub> | 2209 | 25 | 520 | 51% | 2196 | 32% |
| 0.0.77 | LTC <sub>(60.0+0.60s)</sub> | 2134 | 26 | 476 | 50% | 2136 | 29% |
| 0.0.77 | STC <sub>(8.0+0.08s)</sub> | 1844 | 23 | 636 | 49% | 1851 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.76 | VLTC <sub>(2m24s+1.12s)</sub> | 2201 | 52 | 132 | 48% | 2228 | 22% |
| 0.0.76 | LTC <sub>(60.0+0.60s)</sub> | 2124 | 45 | 172 | 49% | 2134 | 23% |
| 0.0.76 | STC <sub>(8.0+0.08s)</sub> | 1902 | 49 | 140 | 48% | 1921 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |