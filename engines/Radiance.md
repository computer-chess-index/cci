# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1709<sub>(+43) | 2049<sub>(+106) | 2182<sub>(+95) |  |
| 4.3 | 2026-03-25 | 1666<sub>(+91) | 1943<sub>(+103) | 2087<sub>(+200) |  |
| 4.2 | 2026-01-17 | 1575<sub>(+new) | 1840<sub>(+new) | 1887<sub>(+new) |  |
| 4.1 | 2025-08-16 |  |  |  |  |
| 4.0.1 | 2025-04-17 |  |  |  |  |
| 4.0 | 2025-04-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Radiance+<version>&body=###%20Engine%20name%0ARadiance%0A%0A###%20Version%0A4.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-27 06:27:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2200
  line "STC (8.0+0.08s)" [1575, 1666, 1709]
  line "STC (8.0+0.08s)" [1575, 1666, 1709]
  line "LTC (60.0+0.60s)" [1840, 1943, 2049]
  line "VLTC (2m24s+1.12s)" [1887, 2087, 2182]
  line "VLTC (2m24s+1.12s)" [1887, 2087, 2182]
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
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2200
  line "STC (8.0+0.08s)" [1575, 1666, 1709]
  line "STC (8.0+0.08s)" [1575, 1666, 1709]
  line "LTC (60.0+0.60s)" [1840, 1943, 2049]
  line "VLTC (2m24s+1.12s)" [1887, 2087, 2182]
  line "VLTC (2m24s+1.12s)" [1887, 2087, 2182]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2182 | 32 | 350 | 49% | 2178 | 22% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2049 | 30 | 398 | 51% | 2033 | 22% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1709 | 30 | 414 | 50% | 1698 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2087 | 30 | 412 | 54% | 2047 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1943 | 31 | 362 | 49% | 1953 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1666 | 32 | 360 | 49% | 1674 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1887 | 36 | 304 | 45% | 1979 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1840 | 39 | 246 | 47% | 1895 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1575 | 34 | 328 | 45% | 1652 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |